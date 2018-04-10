package com.finki.wbs.web;

import com.finki.wbs.model.TerroristAttack;
import com.finki.wbs.repository.TerroristAttackRepository;
import com.google.common.collect.Lists;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/terrorist-attacks")
public class WebController {
    private TerroristAttackRepository terroristAttackRepository;

    @Autowired
    public WebController(TerroristAttackRepository terroristAttackRepository) {
        this.terroristAttackRepository = terroristAttackRepository;
    }

    @GetMapping
    @ResponseBody
    public List<TerroristAttack> getAllTerroristAttacks() {
        return Lists.newArrayList(terroristAttackRepository.findAll());
    }

    @GetMapping("/categories")
    @ResponseBody
    public Map<Integer, String> getAllDistinctCategoriesOfAttacks() {
        Map<Integer, String> map = new HashMap<>();
        map.put(18, "Assault");
        map.put(180, "Use unconventional violence");
        map.put(181, "Abduct, hijack, or take hostag");
        map.put(182, "Physically assault, not specified below");
        map.put(1821, "Sexually assault");
        map.put(1822, "Torture");
        map.put(1823, "Kill by physical assault");
        map.put(183, "Conduct suicide, car, or other non-military bombing");
        map.put(1831, "Carry out suicide bombing");
        map.put(1832, "Carry out car bombing");
        map.put(1833, "Carry out roadside bombing");
        map.put(184, "Use as human shield");
        map.put(185, "Attempt to assassinate");
        map.put(186, "Assassinate");
        return map;
    }

    @GetMapping("/{eventCode}")
    @ResponseBody
    public List<TerroristAttack> getTerroristAttacksByCategory(@PathVariable Integer eventCode) {
        return terroristAttackRepository.findTerroristAttackByEventCodeOrderByDateDesc(eventCode).stream()
                .filter(distinctByKey(TerroristAttack::getUrls)).collect(Collectors.toList());
    }

    private static <T> Predicate<T> distinctByKey(Function<? super T, ?> keyExtractor) {
        Set<Object> seen = ConcurrentHashMap.newKeySet();
        return t -> seen.add(keyExtractor.apply(t));
    }

    @GetMapping("/country/{countryCode}/from/{eventCode}/date/{dateAfter}")
    @ResponseBody
    public List<TerroristAttack> getTerroristAttacksByEventCodeAndCountryCode(@PathVariable String countryCode, @PathVariable Integer eventCode, @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateAfter) {
        // TODO: AndDateAfter instead AndDate after having the new data and also could pass the current attack-id as parameter instead the last two so we can filter the given not to return it as related.
        return terroristAttackRepository.findTerroristAttackByCountryCodeAndEventCodeAndDateOrderByDateDesc(countryCode, eventCode, dateAfter);
    }

    @PostMapping("/metadata")
    @ResponseBody
    public Map<String, String> getMetadata(@RequestBody String url) {
        Map<String, String> map = new HashMap<>();
        try {
            Document doc = Jsoup.connect(url).get();
            map.put("url", url);
            map.put("title", doc.title());
            doc.select("meta").forEach(element -> {
                if (element.hasAttr("property") && element.attr("property").equals("og:image"))
                    map.put("image", element.attr("content"));
            });
        } catch (IOException e) {
            map.put("url", "");
            System.out.println(e.getMessage() + ": " + url);
        } finally {
            return map;
        }
    }

    @GetMapping("/yesterday")
    @ResponseBody
    public List<TerroristAttack> getTerroristAttacksFromYesterday() {
        return terroristAttackRepository.findTerroristAttackByDate(yesterday()).stream()
                .filter(distinctByKeys(TerroristAttack::getLatitude, TerroristAttack::getLongitude)).collect(Collectors.toList());
    }

    private Date yesterday() {
        final Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, -1);
        return cal.getTime();
    }

    private static <T> Predicate<T> distinctByKeys(Function<? super T, ?>... keyExtractors) {
        final Map<List<?>, Boolean> seen = new ConcurrentHashMap<>();
        return t -> {
            final List<?> keys = Arrays.stream(keyExtractors)
                    .map(ke -> ke.apply(t))
                    .collect(Collectors.toList());
            return seen.putIfAbsent(keys, Boolean.TRUE) == null;
        };
    }
}
