import React from "react"
import * as S from "./style"

const Main = () => {
  return (
    <S.MainBG>
      <S.Container>
        <div className="information">
          <div className="container-information">
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers salve problems in real-time.
              Watching scripted tutoriais is great,but underestanding how
              developers think is invaluble.
            </p>
          </div>
        </div>
        <S.DivBlock>
          <div className="button-try">
            <button><strong>it free 7 days</strong> then $20/mo.theerather</button>
          </div>
          <form>
            <div className="container-form">
              <input type="text" placeholder="Jonathan" />
              <input type="text" placeholder="Last Name" />
              <input tpye="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button>claim your free trial</button>
              <S.FooterForm>
                <p>By clicking button you are agreeing to our <strong>Terms and Services</strong></p>
              </S.FooterForm>
            </div>
          </form>
        </S.DivBlock>
      </S.Container>
    </S.MainBG>
  )
}
export default Main
