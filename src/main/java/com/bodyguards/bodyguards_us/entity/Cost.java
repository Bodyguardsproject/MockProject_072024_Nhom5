/*
 *  Contract
 *  @author: Minhhieuano
 *  @created 8/8/2024 12:01 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.CostType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_cost")
public class Cost extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCost;

    @ManyToOne
    @JoinColumn(name = "id_contract")
    private Contract contract;

    private String costName;

    private String description;

    @Enumerated(EnumType.STRING)
    private CostType costType;

    private Double cost;

    private String status;
}
