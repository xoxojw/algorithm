// Iterative Version
// function countDown(num) {
// 	for (var i = num; i > 0; i--) {
// 		console.log(i);
// 	}
// 	console.log("All done!");
// }

// Recursive Version
function countDown(num) {
	// 종료조건
	if (num <= 0) {
		console.log("All done!");
		return; // 아무것도 return하지 않더라도 return문을 작성해야 함
	}
	console.log(num);
	num--;
	countDown(num);
}
countDown(3);

// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0)
// print "All done!"
