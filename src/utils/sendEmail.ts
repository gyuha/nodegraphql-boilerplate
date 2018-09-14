import config from "../config";


/**
 * 이메일 보내기
 * 보낸 메일은 비동기 처리 됨
 * @param to 수신자
 * @param subject 제목
 * @param message 내용
 */
export async function sendMail(to:string, subject: string, message: string) {
  let domain = 'lingolab.io';
  let mailgun = require('mailgun-js')({apiKey: config.mailgun.api_key, domain: domain});
   
  let data = {
    from: 'GGFighter <noreply@lingolab.io>',
    to: to,
    subject: subject,
    html: message
  };
   
  try {
    let body = await mailgun.messages().send(data);
    console.log(body)
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}

