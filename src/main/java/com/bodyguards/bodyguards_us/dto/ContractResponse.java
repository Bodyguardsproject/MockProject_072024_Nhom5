/*
 *  ContractResponse
 *  @author: Minhhieuano
 *  @created 8/19/2024 3:45 PM
 * */


package com.bodyguards.bodyguards_us.dto;

import com.bodyguards.bodyguards_us.enums.ContractStatus;
import lombok.Data;

@Data
public class ContractResponse {
    private Long idContract;
    private String contractName;
    private String contractFile;
    private ContractStatus contractStatus;
}
