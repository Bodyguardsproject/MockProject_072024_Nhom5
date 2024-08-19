package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.TrainingRequest;
import com.bodyguards.bodyguards_us.entity.Bodyguard;
import com.bodyguards.bodyguards_us.entity.Role;
import com.bodyguards.bodyguards_us.entity.Training;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.UserRole;
import com.bodyguards.bodyguards_us.mapper.TrainingMapper;
import com.bodyguards.bodyguards_us.repository.BodyguardRepository;
import com.bodyguards.bodyguards_us.repository.RoleRepository;
import com.bodyguards.bodyguards_us.repository.TrainingRepository;
import com.bodyguards.bodyguards_us.repository.UserRepository;
import com.bodyguards.bodyguards_us.service.FileService;
import com.bodyguards.bodyguards_us.service.TrainingService;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrainingServiceImpl implements TrainingService {

	@Autowired
	TrainingRepository trainingRepository;

	@Autowired
	TrainingMapper trainingMapper;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	BodyguardRepository bodyguardRepository;

	@Autowired
	FileService fileService;

	@Override
	public List<Training> getAllTrainings() {
		return trainingRepository.findAll();
	}

	@Override
	public List<?> getFilterTrainings(Long id, Integer month, Integer year) {
		List<Training> trainings = new ArrayList<>();
		if (id!=null)
			trainings.add(trainingRepository.findById(id).orElseThrow(() -> new RuntimeException("This training doesn't exsit")));
		else if (month!=null){
			int actYear = year==null ? LocalDate.now().getYear() : year;
			trainings = trainingRepository.getTrainingByMonthAndYear(month, actYear);
		}
		return trainings;
	}

	@Override
	public Training updateTraining(Long id, TrainingRequest request) {
		Training training;
		if (id == null) {
			training = trainingMapper.toTraining(request);
		} else {
			training = trainingRepository
					.findById(id)
					.orElseThrow(() -> new RuntimeException("This training doesn't exsit"));
			trainingMapper.updateTraining(request, training);
		}

		training.setFileUrl(fileService.uploadFile(request.getFile()));

		Role supervisorRole = roleRepository.findByName(UserRole.SUPERVISOR).get();
		User supervisor = userRepository
				.findById(request.getSupervisorId())
				.orElseThrow(() -> new RuntimeException("This supervisor doesn't exsit"));
		if (!supervisor.getRoles().contains(supervisorRole)) throw new RuntimeException("This user must be supervisor");

		training.setSupervisor(supervisor);
		List<Bodyguard> bodyguards = new ArrayList<>();
		for (Long idBg : request.getBodyguardIds())
			bodyguards.add(bodyguardRepository
					.findById(idBg)
					.orElseThrow(() -> new RuntimeException("This bodyguard doesn't exsit")));

		training.setBodyguards(bodyguards);
		return trainingRepository.save(training);
	}

	@Override
	public void deleteTraining(Long id) {
		Training training =
				trainingRepository.findById(id).orElseThrow(() -> new RuntimeException("This training doesn't exsit"));
		training.setDelFlag(1);
		trainingRepository.save(training);
	}
}
