package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.TrainingRequest;
import com.bodyguards.bodyguards_us.entity.Training;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface TrainingMapper {

	Training toTraining(TrainingRequest request);

	void updateTraining(TrainingRequest request, @MappingTarget Training training);
}
