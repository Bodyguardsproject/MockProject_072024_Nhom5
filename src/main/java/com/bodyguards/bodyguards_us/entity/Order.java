/*
 *  Order
 *  @author: Minhhieuano
 *  @created 8/8/2024 11:49 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import com.bodyguards.bodyguards_us.enums.OrderStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Table(name = "tbl_order")
public class Order extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOrder;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    @ManyToMany
    @JoinTable(
            name = "tbl_order_has_equipment",
            joinColumns = @JoinColumn(name = "id_order"),
            inverseJoinColumns = @JoinColumn(name = "id_equipment"))
    private List<Equipment> equipments;

    @ManyToOne
    @JoinColumn(name = "id_supervisor")
    private User supervisor;

    private String levelOfProtection;

    private String location;

    private String travelSchedule;

    private Integer numberOfSecurityGuard;

    private Long totalAmount;

    @OneToMany
    private List<OrderDate> orderDates;

    @ManyToOne(fetch = FetchType.LAZY)
    private Service service;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private OrderStatus status = OrderStatus.IN_PROGRESS;

    @Column(length = 1000)
    private String note;
}
