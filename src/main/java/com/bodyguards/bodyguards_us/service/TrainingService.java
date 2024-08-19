package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.TrainingRequest;
import com.bodyguards.bodyguards_us.entity.Training;
import java.util.List;

public interface TrainingService {

	public List<Training> getAllTrainings();

	public List<?> getFilterTrainings (Long id,Integer month, Integer year);

	public Training updateTraining(Long id, TrainingRequest request);

	public void deleteTraining(Long id);
}
