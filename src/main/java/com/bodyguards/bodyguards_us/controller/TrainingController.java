package com.bodyguards.bodyguards_us.controller;

import com.bodyguards.bodyguards_us.dto.ApiResponse;
import com.bodyguards.bodyguards_us.dto.TrainingRequest;
import com.bodyguards.bodyguards_us.service.TrainingService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/training")
public class TrainingController {

    @Autowired
    TrainingService trainingService;

    @GetMapping("/all")
    @PreAuthorize("hasAnyRole('MANAGER')")
    public ResponseEntity<ApiResponse<?>> getTrainings(){
        return ResponseEntity.ok(ApiResponse.success(trainingService.getAllTrainings()));
    }

    @GetMapping("")
    @PreAuthorize("hasAnyRole('MANAGER')")
    public ResponseEntity<ApiResponse<?>> getTrainingById(@RequestParam Long id){
        return ResponseEntity.ok(ApiResponse.success(trainingService.getTrainingById(id)));
    }

    @PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasAnyRole('MANAGER')")
    public ResponseEntity<ApiResponse<?>> createNewTraining(@ModelAttribute @Valid TrainingRequest request){
        return ResponseEntity.ok(ApiResponse.success(trainingService.updateTraining(null, request)));
    }

    @PutMapping(value = "/update", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasAnyRole('MANAGER')")
    public ResponseEntity<ApiResponse<?>> updateTraining(@RequestParam Long id, @ModelAttribute @Valid TrainingRequest request){
        return ResponseEntity.ok(ApiResponse.success(trainingService.updateTraining(id, request)));
    }

    @DeleteMapping("/delete")
    @PreAuthorize("hasAnyRole('MANAGER')")
    public ResponseEntity<ApiResponse<?>> deleteTraining(@RequestParam Long id){
        trainingService.deleteTraining(id);
        return ResponseEntity.ok(ApiResponse.success("Delete training Successfully"));
    }

}
