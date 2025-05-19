
function Count(){

  // const info = {
  //   currentCount: 4,
  //   limit: 10
  // }

  // const newInfo = {
  //   ...info,
  //   newCount: true,
  // };
  // console.log(newInfo);
  const number = 5
  return <span className={`count ${number === 5 & "count--limit"} : ""`}>{number}</span>
}
export default Count