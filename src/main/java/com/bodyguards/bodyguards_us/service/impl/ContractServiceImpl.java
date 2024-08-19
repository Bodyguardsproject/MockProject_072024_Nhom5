/*
 *  ContractServiceImpl
 *  @author: Minhhieuano
 *  @created 8/19/2024 3:40 PM
 * */

package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.ContractRequest;
import com.bodyguards.bodyguards_us.dto.ContractResponse;
import com.bodyguards.bodyguards_us.entity.*;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.ContractMapper;
import com.bodyguards.bodyguards_us.repository.*;
import com.bodyguards.bodyguards_us.service.ContractService;
import com.bodyguards.bodyguards_us.service.FileService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContractServiceImpl implements ContractService {
	private final ContractRepository contractRepository;
	private final FileService fileService;
	private final OrderRepository orderRepository;
	private final UserRepository userRepository;
	private final ServiceRepository serviceRepository;
	private final BodyguardRepository bodyguardRepository;
	private final EquipmentRepository equipmentRepository;
	private final ContractMapper contractMapper;

	@Override
	public ContractResponse createContract(ContractRequest request) {
		Order order = orderRepository
				.findById(request.getOrderId())
				.orElseThrow(() -> new ApiException(ErrorCode.ORDER_NOT_FOUND));

		Services service = serviceRepository
				.findById(request.getServiceId())
				.orElseThrow(() -> new ApiException(ErrorCode.SERVICE_NOT_FOUND));

		if (request.getSupervisorId() != null) {
			Bodyguard supervisor = bodyguardRepository
					.findById(request.getSupervisorId())
					.orElseThrow(() -> new ApiException(ErrorCode.USER_NOT_FOUND));
			order.setSupervisor(supervisor);
		}

		List<Bodyguard> bodyguards = bodyguardRepository.findByIdBodyguardIn(request.getBodyguards());

		if (bodyguards.size() != request.getBodyguards().size()) {
			throw new ApiException(ErrorCode.USER_NOT_FOUND);
		}

		order.setBodyguards(bodyguards);

		List<Equipment> equipments = equipmentRepository.findByIdEquipmentIn(request.getEquipments());

		if (equipments.size() != request.getEquipments().size()) {
			throw new ApiException(ErrorCode.EQUIPMENT_NOT_FOUND);
		}

		order.setEquipments(equipments);

		Contract contract = Contract.builder()
				.contractFile(fileService.uploadFile(request.getContractFile()))
				.contractName(request.getName())
				.contractStatus(request.getStatus())
				.order(order)
				.serviceCost(request.getCostService())
				.equipmentCost(request.getCostEquipment())
				.build();

		orderRepository.save(order);
		Contract newContract = contractRepository.save(contract);
		return contractMapper.toContractResponse(newContract);
	}
}
