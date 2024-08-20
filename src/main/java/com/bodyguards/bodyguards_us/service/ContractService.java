/*
 *  ContractService
 *  @author: Minhhieuano
 *  @created 8/19/2024 3:39 PM
 * */

package com.bodyguards.bodyguards_us.service;

import com.bodyguards.bodyguards_us.dto.ContractRequest;
import com.bodyguards.bodyguards_us.dto.ContractResponse;

public interface ContractService {
	ContractResponse createContract(ContractRequest request);
}
