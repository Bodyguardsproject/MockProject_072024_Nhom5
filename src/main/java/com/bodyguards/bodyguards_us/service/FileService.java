/*
 *  FileService
 *  @author: Minhhieuano
 *  @created 8/17/2024 8:55 AM
 * */

package com.bodyguards.bodyguards_us.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileService {
	String uploadFile(MultipartFile file);
}
