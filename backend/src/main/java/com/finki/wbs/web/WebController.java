package com.finki.wbs.web;

import com.finki.wbs.model.TerroristAttack;
import com.finki.wbs.repository.TerroristAttackRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
