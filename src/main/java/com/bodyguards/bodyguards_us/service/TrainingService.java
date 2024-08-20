package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.TrainingRequest;
import com.bodyguards.bodyguards_us.entity.Training;
import com.bodyguards.bodyguards_us.entity.User;

import java.util.List;

public interface TrainingService {

	public List<Training> getAllTrainings();

	public Training getTrainingById (Long id);

	public List<Training> getTrainingByMonth(Integer month, Integer year, User user);

	public Training updateTraining(Long id, TrainingRequest request);

	public void deleteTraining(Long id);
}
