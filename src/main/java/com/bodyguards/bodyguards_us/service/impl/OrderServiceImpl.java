/*
 *  OrderServiceImpl
 *  @author: Minhhieuano
 *  @created 8/14/2024 5:26 PM
 * */


package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.repository.OrderRepository;
import com.bodyguards.bodyguards_us.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    protected final OrderRepository orderRepository;
}
