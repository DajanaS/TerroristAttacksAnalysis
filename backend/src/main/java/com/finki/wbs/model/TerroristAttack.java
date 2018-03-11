package com.finki.wbs.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "vbs.main_table")
public class TerroristAttack {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "datum")
    private Date date;

    @Column(name = "event_code")
    private Integer eventCode;

    @Column(name = "goldstein_scale")
    private Float scale;

    @Column(name = "num_sources")
    private Integer numSources;

    @Column(name = "geo_country")
    private String country;

    @Column(name = "geo_country_code")
    private String countryCode;

    @Column(name = "sourceurls")
    private String URLs;
}
