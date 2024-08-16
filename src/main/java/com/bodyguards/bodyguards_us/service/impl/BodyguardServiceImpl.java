package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.BodyguardResponse;
import com.bodyguards.bodyguards_us.entity.Bodyguard;
import com.bodyguards.bodyguards_us.mapper.BodyguardMapper;
import com.bodyguards.bodyguards_us.repository.BodyguardRepository;
import com.bodyguards.bodyguards_us.service.BodyguardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BodyguardServiceImpl implements BodyguardService {

    @Autowired
    private  BodyguardRepository bodyguardRepository;
    @Autowired
    private  BodyguardMapper bodyguardMapper;

    @Override
    public List<BodyguardResponse> getAllBodyguards() {
        List<Bodyguard> bodyguards = bodyguardRepository.findAll();
        return bodyguards.stream()
                .map(bodyguardMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<BodyguardResponse> getBodyguardById(Long id) {
        return bodyguardRepository.findById(id)
                .map(bodyguardMapper::toDTO);
    }
}
