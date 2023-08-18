const UserRepository = require('../3repositories/user.repository');
const ApiError = require('../apierror');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserService {
  userRepository = new UserRepository();
  // 회원가입 API
  signupUser = async (roleId, loginId, password, nickname, name, email, address, phoneNumber) => {
    const idReg = /^[a-zA-Z0-9]{3,}$/; //loginId 형식검사
    const passwordReg = /^.{4,}$/; //password 형식 검사
    if (!idReg.test(loginId)) {
      throw new ApiError('아이디 형식이 일치하지 않습니다.', 410);
    }
    if (!passwordReg.test(password)) {
      throw new ApiError('패스워드 형식이 일치하지 않습니다.', 411);
    }
    if (password.includes(loginId)) {
      throw new ApiError('패스워드에 아이디가 포함되어 있습니다.', 413);
    }

    const isExistUser = await this.userRepository.findUser(loginId);
    if (isExistUser) {
      throw new ApiError('중복된 아이디 입니다.', 409);
    }

    //암호화
    const hashPassword = await bcrypt.hash(password, 6);
    await this.userRepository.createUser(
      roleId,
      loginId,
      hashPassword,
      nickname,
      name,
      email,
      address,
      phoneNumber
    );
  };
  // 로그인 API
  //   loginUser = async (loginId, password) => {
  //     const user = await this.userRepository.findUser(loginId);
  //     if (!user) {
  //       throw new ApiError('닉네임 또는 패스워드를 확인해주세요.', 412);
  //     }
  //     const match = await bcrypt.compare(password, user.password);
  //     if (!match) {
  //       throw new ApiError('닉네임 또는 패스워드를 확인해주세요.', 412);
  //     }

  //     const loginToken = jwt.sign({userId: user.userId}, process.env.COOKIE_SECRET, {
  //       expiresIn: '60m',
  //     });

  //     return {loginToken};
  //   };
  //회원 정보 수정 API
  updateUser = async (userId, password, existPassword, newPassword, nickname) => {
    const match = await bcrypt.compare(existPassword, password);
    if (!match) {
      throw new ApiError('기존 비밀번호가 일치하지 않습니다.', 412);
    }
    if (newPassword) {
      const passwordReg = /^.{4,}$/; //password 형식 검사
      if (!passwordReg.test(newPassword)) {
        throw new ApiError('비밀번호 형식이 일치하지 않습니다.', 412);
      }
    }

    const hashPassword = newPassword ? await bcrypt.hash(newPassword, 6) : null;

    await this.userRepository.updateUser(userId, hashPassword, nickname);
  };
  //회원 탈퇴 API
  deleteUser = async (userId, password, existPassword) => {
    const match = await bcrypt.compare(existPassword, password);
    if (!match) {
      throw new ApiError('비밀번호가 일치하지 않습니다.', 412);
    }

    await this.userRepository.deleteUser(userId);
  };
}

module.exports = UserService;
