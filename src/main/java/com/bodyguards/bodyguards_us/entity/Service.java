/*
 *  Contract
 *  @author: Minhhieuano
 *  @created 8/8/2024 12:01 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_service")
public class Service extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idService;

    private String name;

    private String image;

    @Column(length = 5000)
    private String description;

    @ManyToMany
    @JoinTable(
            name = "tbl_recruitment_service",
            joinColumns = @JoinColumn(name = "id_recruitment"),
            inverseJoinColumns = @JoinColumn(name = "id_service"))
    private List<Recruitment> recruitments;

    @OneToMany(mappedBy = "service", fetch = FetchType.LAZY)
    private List<ServiceDetail> serviceDetails;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "service")
    private List<Order> orders;
}
