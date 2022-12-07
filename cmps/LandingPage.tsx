import { useEffect } from 'react'

export const LandingPage = () => {
  var i = 0
  var j = 0

  var txt = 'SHLOMI NUGARKER'
  var txt2 = 'Full-Stack-Developer'
  var speed = 100

  useEffect(() => {
    typeWriter()
  }, [typeWriter])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById('name')!.innerHTML += txt.charAt(i)
      i++
      setTimeout(typeWriter, speed)
    } else {
      typeWriter2()
    }
  }
  function typeWriter2() {
    if (j < txt2.length) {
      document.getElementById('text2')!.innerHTML += txt2.charAt(j)
      j++
      setTimeout(typeWriter2, speed)
    }
  }

  return (
    <section className="landing-page" id="land-page">
      <div className="container">
        <h1 id="name"></h1>
        <div className="divider"></div>
        <p id="text2"></p>
      </div>
    </section>
  )
}
