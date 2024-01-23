import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from '../../img/Logo.png';
import { Container } from 'react-bootstrap';

function EmailRegister() {
  const [checkedItems, setCheckedItems] = useState([]);

  const agreeHandler = (checked, value) => {
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else if (!checked && checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((el) => el !== value));
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");

  let body = {
    email: email,
    password: password,
    nickname: nickname,
    name: name,
  };

  const onSubmit = async () => { };

  const emailCheck = async () => {
    if (email === "") {
      setCheckedEmail("필수 항목입니다.");
    }
  };

  const passwordCheck = async () => {
    if (password === "") {
      setCheckedPassword("비밀번호를 입력해주세요.");
    } else {
      var regex =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      console.log("비밀번호 유효성 검사 :: ", regex.test(password));
    }
  };

  const passwordCheck2 = async () => {
    if (password !== document.getElementById("passwordConfirm").value) {
      setCheckedPassword2("비밀번호가 일치하지 않습니다.");
    } else {
      setCheckedPassword2("");
    }
  };

  const nameCheck = async () => {
    if (email === "") {
      setCheckedName("필수 항목입니다.");
    }
  };

  const nicknameCheck = async () => {
    if (email === "") {
      setCheckedNickname("필수 항목입니다.");
    }
  };

  const [checkedEmail, setCheckedEmail] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [checkedPassword2, setCheckedPassword2] = useState("");
  const [checkedName, setCheckedName] = useState("");
  const [checkedNickname, setCheckedNickname] = useState("");

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
        </Container>
      </Container>

      <WrapLogin>
        <HeadBannerGroup />
        <ReauthPhone>
          <LoginWrap>
            <LoginLogo>
              <img src={logo} width="300px" />
            </LoginLogo>

            <LoginSection>
              <LoginTitle>정말 간단한 회원가입하기</LoginTitle>
              <SignupStep className="wrap">
                <Title>일반회원 가입하기</Title>
              </SignupStep>
              <FormBlock>
                <FormBlockHead>
                  <AsteriskRed>*</AsteriskRed>이메일
                </FormBlockHead>

                <FormBlockBody>
                  <InputTextSizeW>
                    <EmailInput
                      id="email"
                      type="email"
                      value={email}
                      placeholder="이메일을 입력해주세요."
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      onBlur={() => emailCheck()}
                    />
                  </InputTextSizeW>
                  <FormError>{checkedEmail}</FormError>
                </FormBlockBody>
              </FormBlock>

              <FormBlock>
                <FormBlockHead>
                  <AsteriskRed>*</AsteriskRed> 비밀번호
                </FormBlockHead>
                <FormBlockBody>
                  <InputTextSizeW>
                    <PasswordInput
                      id="password"
                      type="password"
                      value={password}
                      placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      onBlur={() => passwordCheck()}
                    />
                  </InputTextSizeW>
                  <FormError>{checkedPassword}</FormError>
                </FormBlockBody>
              </FormBlock>

              <FormBlock>
                <FormBlockBody>
                  <InputTextSizeW>
                    <PasswordInput
                      id="passwordConfirm"
                      type="password"
                      placeholder="비밀번호 확인"
                      required
                      onBlur={() => passwordCheck2()}
                    />
                  </InputTextSizeW>
                </FormBlockBody>
                <FormError>{checkedPassword2}</FormError>
              </FormBlock>

              <FormBlock>
                <FormBlockHead>
                  <AsteriskRed>*</AsteriskRed> 이름
                </FormBlockHead>
                <FormBlockBody>
                  <InputTextSizeWTypeL>
                    <NameInput
                      id="name"
                      value={name}
                      type="text"
                      placeholder="이름을 입력해 주세요"
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      onBlur={() => nameCheck()}
                    />
                  </InputTextSizeWTypeL>
                </FormBlockBody>
                <FormError>{checkedName}</FormError>
              </FormBlock>

              <FormBlock>
                <FormBlockHead>
                  <AsteriskRed>*</AsteriskRed> 닉네임
                </FormBlockHead>
                <FormBlockBody>
                  <InputTextSizeWTypeL>
                    <NicknameInput
                      id="nickname"
                      value={nickname}
                      type="text"
                      placeholder="닉네임을 입력해 주세요"
                      required
                      onChange={(e) => {
                        setNickname(e.target.value);
                      }}
                      onBlur={() => nicknameCheck()}
                    />
                  </InputTextSizeWTypeL>
                </FormBlockBody>
                <FormError>{checkedNickname}</FormError>
              </FormBlock>

              <FormBlockCheckAllWrap>
                <Terms>
                  <TermsBody>
                    <TermsItem>
                      <InputCheckBox>
                        {/* <Terms1 type="checkbox"></Terms1> */}
                        <input
                          type="checkbox"
                          value="provision"
                          onChange={(e) => {
                            agreeHandler(e.currentTarget.checked, e.target.value);
                          }}
                          checked={
                            checkedItems.includes("provision") ? true : false
                          }
                        />
                      </InputCheckBox>
                      <Terms1Label>만 19세 이상입니다.</Terms1Label>
                    </TermsItem>
                    {/*  */}
                    <TermsItem></TermsItem>
                    {/*  */}
                  </TermsBody>
                </Terms>

                <Terms1Error />
                <TermsError />
              </FormBlockCheckAllWrap>

              <FormBlockSubmit>
                <FormBlockBody>
                  <BtnLogin
                    type="button"
                    onClick={() => {
                      onSubmit();
                    }}
                  >
                    회원가입하기
                  </BtnLogin>
                </FormBlockBody>
              </FormBlockSubmit>
            </LoginSection>
          </LoginWrap>
        </ReauthPhone>
      </WrapLogin>
    </section>
  );

}

const BtnLogin = styled.button`
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  background: #f1c333;
  border: 1px solid #f1c333;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
`;

const FormBlockSubmit = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const TermsError = styled.span`
  display: none;
  cursor: default !important;
  color: #ff4b50;
  margin: 10px 0 0;
`;

const Terms1Error = styled.span`
  color: #ff4b50;
  margin: 10px 0 0;
  display: block !important;
  cursor: default !important;
`;

const Terms1Label = styled.label`
  overflow: hidden;
  display: block;
  font-size: 14px;
`;

const TermsItem = styled.div`
  margin-top: 5px;
`;

const InputCheckBox = styled.div`
  float: left;
  margin-right: 10px;
  display: inline-block;
`;

const TermsBody = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
`;

const Terms = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const FormBlockCheckAllWrap = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const EmailInput = styled.input`
  font-size: 14px;
  height: 48px;
  background: #fff;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 2px;
  appearance: none;
`;

const PasswordInput = styled.input.attrs({ type: "password" })`
  font-size: 14px;
  height: 48px;
  background: #fff;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 2px;
  appearance: none;
`;

const NameInput = styled.input`
  font-size: 14px;
  height: 48px;
  background: #fff;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 2px;
  appearance: none;
`;

const NicknameInput = styled.input`
  font-size: 14px;
  height: 48px;
  background: #fff;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 2px;
  appearance: none;
`;

const InputTextSizeWTypeL = styled.div`
  box-sizing: border-box;
  vertical-align: middle;
  height: 48px;
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;
`;

const FormError = styled.span`
  color: #ff4b50;
  margin: 10px 0 0;
  display: block;
  cursor: default !important;
`;

const InputTextSizeW = styled.div`
  &.formError {
    cursor: default !important;
  }
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;
  vertical-align: middle;
  box-sizing: border-box;
`;

const FormBlockBody = styled.div`
  text-align: left;
`;

const AsteriskRed = styled.em`
  color: #ff4b50;
  font-size: 18px;
  display: inline-block;
`;

const FormBlockHead = styled.label`
  font-size: 14px;
`;

const FormBlock = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;
const Title = styled.h3``;
const IsActive = styled.li``;

const SignupStep = styled.div`
  text-align: center;
  margin: 45px 0 20px;

  ${Title} {
    font-size: 18px;
    font-weight: normal;
  }

  &.wrap {
    text-align: center;
    margin: 45px 0 20px;

    ${IsActive} {
      color: #fff;
      border-color: #f1c333;
      background: #f1c333;
    }

    ul {
      display: inline-block;
      position: relative;
      border-top: 1px solid #aaa;
    }

    li {
      position: relative;
      top: -15px;
      z-index: 10;
      background: #fff;
      color: #999;
      border: 1px solid #999;
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      -webkit-border-radius: 20px;
      border-radius: 20px;
    }

    li + li {
      margin-left: 50px;
    }
  }
`;

const LoginTitle = styled.h2`
  font-size: 14px;
  color: #333;
  text-align: center;
  position: relative;
  top: -10px;
  background: #fff;
  display: inline-block;
  padding: 0 10px;
`;

const LoginSection = styled.section`
  text-align: center;
  margin-top: 50px;
  border-top: 1px solid #333;
  padding-bottom: 100px;
`;

const LogoA = styled.div`
  display: block;
`;

const LoginLogo = styled.div`
  padding-top: 40px;
  text-align: center;
  padding: 40px 0 0;
`;

const LoginWrap = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
  background: #fff;
`;

const ReauthPhone = styled.form`
  width: 384px;
  display: block;
  margin: 0 auto;
`;

const HeadBannerGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const WrapLogin = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
  background: #fff;
`;

export default EmailRegister;
