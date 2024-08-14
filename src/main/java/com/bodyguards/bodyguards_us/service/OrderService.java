/*
 *  OrderService
 *  @author: Minhhieuano
 *  @created 8/14/2024 5:26 PM
 * */

package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.CreateOrderRequest;
import com.bodyguards.bodyguards_us.entity.User;

public interface OrderService {
    String createOrder(CreateOrderRequest request, User user);
}
