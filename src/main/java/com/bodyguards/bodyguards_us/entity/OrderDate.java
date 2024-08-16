/*
 *  OrderDate
 *  @author: Minhhieuano
 *  @created 8/14/2024 5:39 PM
 * */

package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_order_date")
public class OrderDate extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOrderDate;

    private Date orderDate;

    @ManyToOne()
    @JoinColumn(name = "id_order")
    private Order order;
}

