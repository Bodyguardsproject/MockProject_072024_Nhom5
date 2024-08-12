package com.bodyguards.bodyguards_us.utils;

import com.bodyguards.bodyguards_us.security.RsaAccessTokenKeyConfigProperties;
import com.bodyguards.bodyguards_us.security.RsaRefreshTokenKeyConfigProperties;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.Security;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import lombok.RequiredArgsConstructor;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class KeyUtils {

	static {
		Security.addProvider(new BouncyCastleProvider());
	}

	private final RsaRefreshTokenKeyConfigProperties refreshTokenKeyConfigProperties;
	private final RsaAccessTokenKeyConfigProperties accessTokenKeyConfigProperties;

	public static RSAPublicKey loadPublicKey(String filePath)
			throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
		try (FileInputStream fis = new FileInputStream(filePath)) {
			byte[] keyBytes = fis.readAllBytes();
			X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);
			KeyFactory keyFactory = KeyFactory.getInstance("RSA");
			return (RSAPublicKey) keyFactory.generatePublic(spec);
		}
	}

	public static RSAPrivateKey loadPrivateKey(String filePath)
			throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
		try (FileInputStream fis = new FileInputStream(filePath)) {
			byte[] keyBytes = fis.readAllBytes();
			PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(keyBytes);
			KeyFactory keyFactory = KeyFactory.getInstance("RSA");
			return (RSAPrivateKey) keyFactory.generatePrivate(spec);
		}
	}

	public RSAPublicKey getAccessTokenPublicKey() {
		try {
			return loadPublicKey(accessTokenKeyConfigProperties.publicKey());
		} catch (IOException | NoSuchAlgorithmException | InvalidKeySpecException e) {
			throw new RuntimeException(e);
		}
	}

	public PrivateKey getAccessTokenPrivateKey() {
		try {
			return loadPrivateKey(accessTokenKeyConfigProperties.privateKey());
		} catch (IOException | InvalidKeySpecException | NoSuchAlgorithmException e) {
			throw new RuntimeException(e);
		}
	}

	public RSAPublicKey getRefreshTokenPublicKey() {
		try {
			return loadPublicKey(refreshTokenKeyConfigProperties.publicKey());
		} catch (IOException | NoSuchAlgorithmException | InvalidKeySpecException e) {
			throw new RuntimeException(e);
		}
	}

	public PrivateKey getRefreshTokenPrivateKey() {
		try {
			return loadPrivateKey(refreshTokenKeyConfigProperties.privateKey());
		} catch (IOException | InvalidKeySpecException | NoSuchAlgorithmException e) {
			throw new RuntimeException(e);
		}
	}
}
