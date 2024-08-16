package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.EquipmentRequest;
import com.bodyguards.bodyguards_us.service.EquipmentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/equipment")
public class EquipmentController {

	@Autowired
	EquipmentService equipmentService;

	@GetMapping("/")
	public ResponseEntity<ApiResponse<?>> getAllEquipment() {
		return ResponseEntity.ok(ApiResponse.success(equipmentService.getAllEquipment()));
	}

	@GetMapping("/{id}")
	public ResponseEntity<ApiResponse<?>> getEquipmentById(@PathVariable Long id) {
		return ResponseEntity.ok(ApiResponse.success(equipmentService.getAllEquipment()));
	}

	@PostMapping("/create")
	public ResponseEntity<ApiResponse<?>> createEquipment(@RequestBody @Valid EquipmentRequest request) {
		return ResponseEntity.ok(ApiResponse.success(equipmentService.createNewEquipment(request)));
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<ApiResponse<?>> updateEquipmentById(
			@PathVariable Long id, @RequestBody @Valid EquipmentRequest request) {
		return ResponseEntity.ok(ApiResponse.success(equipmentService.updateEquipmentById(id, request)));
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<ApiResponse<?>> deleteEquipmentById(@PathVariable Long id) {
		equipmentService.deleteEquipmentById(id);
		return ResponseEntity.ok(ApiResponse.success("Delete Equipment Successfully"));
	}
}
