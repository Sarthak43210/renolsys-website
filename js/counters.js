// 4. Smooth Number Counters (Stats Bar)
const statsSection = document.querySelector('.stats-wrap');
const statNums = document.querySelectorAll('.stat-num');

if (statsSection && statNums.length > 0) {
    ScrollTrigger.create({
        trigger: statsSection,
        start: "top 90%",
        once: true,
        onEnter: () => {
            statNums.forEach(stat => {
                const originalText = stat.innerText;
                const targetNum = parseInt(originalText.replace(/[^0-9]/g, ''));
                const suffix = originalText.replace(/[0-9]/g, ''); // '+' or '%'

                gsap.to(stat, {
                    innerText: targetNum,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        stat.innerText = Math.round(this.targets()[0].innerText) + suffix;
                    }
                });
            });
        }
    });
}
