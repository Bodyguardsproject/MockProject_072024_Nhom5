/*
 *  ContractRepository
 *  @author: Minhhieuano
 *  @created 8/19/2024 3:39 PM
 * */

package com.bodyguards.bodyguards_us.repository;

import com.bodyguards.bodyguards_us.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {}
