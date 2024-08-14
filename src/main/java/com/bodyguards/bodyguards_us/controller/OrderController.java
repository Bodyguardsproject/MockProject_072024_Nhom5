/*
 *  OrderController
 *  @author: Minhhieuano
 *  @created 8/14/2024 5:16 PM
 * */


package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

//    @PostMapping()


}
