/*
 *  BaseEntity
 *  @author: Minhhieuano
 *  @created 8/8/2024 9:50 AM
 * */

package com.bodyguards.bodyguards_us.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import java.util.Date;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Data
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {
	//    @Id
	//    @SequenceGenerator(
	//            name = "primary_key_seq",
	//            sequenceName = "primary_key_seq",
	//            allocationSize = 1,
	//            initialValue = 1000
	//    )
	//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "primary_key_seq")
	//    @Column(name = "id", updatable = false)
	//    private int id;

	// created_by
	// modified_by

	@CreatedDate
	@Column(name = "created_date")
	private Date createdDate;

	@LastModifiedDate
	@Column(name = "modified_date")
	private Date modifiedDate;

	@Column(name = "deflag")
	@Min(0)
	@Max(1)
	private Integer delFlag;
}
