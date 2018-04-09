package com.finki.wbs.repository;

import com.finki.wbs.model.TerroristAttack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface TerroristAttackRepository extends JpaRepository<TerroristAttack, Integer> {
    List<TerroristAttack> findTerroristAttackByEventCodeOrderByDateDesc(Integer eventCode);

    List<TerroristAttack> findTerroristAttackByCountryCodeAndEventCodeAndDateOrderByDateDesc(String countryCode, Integer eventCode, Date dateAfter);

    List<TerroristAttack> findTerroristAttackByDate(Date date);
}
