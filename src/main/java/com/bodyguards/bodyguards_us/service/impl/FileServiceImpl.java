package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.service.FileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileServiceImpl implements FileService {

    @Value("${upload.path}")
    private String path;

    @Override
    public String uploadFile(MultipartFile file) {

        try {
            String originalFileName = file.getOriginalFilename();
            String newFileName = originalFileName;

            File uploadDir = new File(path);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            Path path = Paths.get(uploadDir.getAbsolutePath() + File.separator + newFileName);
            Files.write(path, file.getBytes());
            return newFileName;

        } catch (IOException e) {
            var msg = String.format("Failed to store file %f", file.getName());
            throw new RuntimeException(msg);
        }
    }


    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(System.getProperty("java.io.tmpdir") + "/" + file.getOriginalFilename());

        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }

    // check content file
    public Boolean isImageFile(MultipartFile file) {
        if (file.getContentType() != null && file.getContentType().startsWith("image/")) return true;
        throw new RuntimeException("File must be image");
    }

    // check size file
    public Boolean isValidSize(MultipartFile file, double maxSize) {
        double sizeFile = (double) file.getSize() / (1024 * 1024);
        if (sizeFile < maxSize) return true;
        throw new RuntimeException(String.format("File is maximum %s MB", maxSize));
    }

    // check empty file
    public Boolean isNotEmpty(MultipartFile file) {
        if (file.isEmpty() == false && file.getSize() > 0) return true;
        return false;
    }
}
