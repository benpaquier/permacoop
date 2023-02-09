import { LeaveRequestDTO } from './LeaveRequestDTO';
import { validate } from 'class-validator';
import { Status, Type } from 'src/Domain/HumanResource/Leave/LeaveRequest.entity';
import { LeaveRequestsDTO } from './LeaveRequestsDTO';

describe('LeaveRequestsDTO', () => {
  it('testValidDTO', async () => {
    const dto = new LeaveRequestsDTO();
    dto.page = 1;
    dto.limit = 10;
    dto.status = Status.ACCEPTED;

    const validation = await validate(dto);
    expect(validation).toHaveLength(0);
  });

  it('testInvalidDTO', async () => {
    const dto = new LeaveRequestsDTO();
    dto.limit = -10;
    dto.page = -2;
    dto.status = "dfsdsf";
    const validation = await validate(dto);

    expect(validation).toHaveLength(3);
    expect(validation[0].constraints).toMatchObject({
      isEnum: "status must be a valid enum value"
    });
    expect(validation[1].constraints).toMatchObject({
      isPositive: 'limit must be a positive number',
    });
    expect(validation[2].constraints).toMatchObject({
      min: "page must not be less than 1"
    });
  });
});
