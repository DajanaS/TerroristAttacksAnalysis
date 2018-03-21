package com.finki.wbs.web;

import com.finki.wbs.model.TerroristAttack;
import com.finki.wbs.repository.TerroristAttackRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

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
    public HashMap<Integer, String> getAllDistinctCategoriesOfAttacks() {
        HashMap<Integer, String> map = new HashMap<>();
        map.put(18, "Assault");
        map.put(180, "Use unconventional violence, not specified below");
        map.put(181, "Abduct, hijack, or take hostag");
        map.put(182, "Physically assault, not specified below");
        map.put(1821, "Sexually assault");
        map.put(1822, "Torture");
        map.put(1823, "Kill by physical assault");
        map.put(183, "Conduct suicide, car, or other non-military bombing, not spec below");
        map.put(1831, "Carry out suicide bombing");
        map.put(1832, "Carry out car bombing");
        map.put(1833, "Carry out roadside bombing");
        map.put(184, "Use as human shield");
        map.put(185, "Attempt to assassinate");
        map.put(186, "Assassinate");
        return map;
    }
}
