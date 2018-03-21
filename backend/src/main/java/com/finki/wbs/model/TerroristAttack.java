package com.finki.wbs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "main_table", schema="vbs")
public class TerroristAttack {

    @Id
    private Integer id;

    @Column(name = "datum", columnDefinition = "DATE")
    private Date date;

    @Column(name = "event_code")
    private Integer eventCode;

    @Column(name = "goldstein_scale")
    private Double scale;

    @Column(name = "num_sources")
    private Integer numSources;

    @Column(name = "geo_country")
    private String country;

    @Column(name = "geo_country_code")
    private String countryCode;

    @Column(name = "sourceurls")
    private String URLs;
}
