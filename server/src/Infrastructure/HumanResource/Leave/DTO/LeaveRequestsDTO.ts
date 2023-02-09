import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsOptional,
  IsPositive
} from 'class-validator';
import { Status } from 'src/Domain/HumanResource/Leave/LeaveRequest.entity';
import { PaginationDTO } from 'src/Infrastructure/Common/DTO/PaginationDTO';

export class LeaveRequestsDTO extends PaginationDTO {
  @IsEnum(Status)
  @IsOptional()
  @ApiPropertyOptional({ enum: Status })
  public status: Status;

  @IsOptional()
  @ApiPropertyOptional()
  @IsPositive()
  @Type(() => Number)
  public limit: number;
}
