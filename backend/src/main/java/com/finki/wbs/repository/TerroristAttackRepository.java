package com.finki.wbs.repository;

import com.finki.wbs.model.TerroristAttack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TerroristAttackRepository extends JpaRepository<TerroristAttack, Long> {
    @Procedure(name = "ProcedureName")
    List<TerroristAttack> findAll();
}
