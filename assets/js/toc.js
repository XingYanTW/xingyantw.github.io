document.addEventListener('DOMContentLoaded', function () {
    const tocContainer = document.getElementById('toc');
    if (!tocContainer) return;

    const content = document.querySelector('.post-content');
    if (!content) return;

    const headers = content.querySelectorAll('h1, h2, h3, h4');
    if (headers.length === 0) return;

    const tocList = document.createElement('ul');

    // Track nesting level
    let currentLevel = 0;
    let currentList = tocList;
    const listStack = [tocList];

    headers.forEach((header, index) => {
        // Add ID to header if missing
        if (!header.id) {
            header.id = 'h-' + index;
        }

        const level = parseInt(header.tagName.substring(1));
        const text = header.innerText;
        const link = document.createElement('a');
        link.href = '#' + header.id;
        link.textContent = text;

        const listItem = document.createElement('li');
        listItem.appendChild(link);

        // Handle nesting
        if (listStack.length === 0) {
            // Should not happen as we start with [tocList]
            listStack.push(tocList);
        }

        // Logic to determine where to append
        // This is a simple flat approach or nested? 
        // Let's implement simple nesting based on H2, H3

        const prevHeader = headers[index - 1];
        const prevLevel = prevHeader ? parseInt(prevHeader.tagName.substring(1)) : 0;

        // Simplification: Just append everything flat-ish but with indentation classes?
        // Or build a real tree.
        // Let's try to build a proper nested list.

        // Adjust levels relative to the first header or just standard H1-H6?
        // Minima usually uses H2 as top level in posts (H1 is title).

        let lastList = listStack[listStack.length - 1];

        if (index === 0) {
            lastList.appendChild(listItem);
            currentLevel = level;
        } else {
            if (level > currentLevel) {
                // New nested list
                const subUl = document.createElement('ul');
                // Append subUl to the LAST item of the current list
                const lastItem = lastList.lastElementChild;
                if (lastItem) {
                    lastItem.appendChild(subUl);
                    listStack.push(subUl);
                    subUl.appendChild(listItem);
                } else {
                    // Fallback if no last item (shouldn't happen if structure is valid)
                    lastList.appendChild(listItem);
                }
            } else if (level < currentLevel) {
                // Pop levels
                while (level < currentLevel && listStack.length > 1) {
                    listStack.pop();
                    // We need to also decrement currentLevel accurately? 
                    // Actually we need to walk back up the stack.
                    // It's safer to rely on stack depth if levels are strictly incrementing by 1.
                    // But headers might jump H2 -> H4.
                    // Let's simplify: just pop until we fit?
                    // Since we don't store levels in stack, let's just pop.

                    // Better approach:
                    // Use a stack of {level, element}
                }
                // Just popping once usually enough for H3 -> H2?
                // But if H4 -> H2, we pop twice.
                // Let's re-implement with strict stack logic if needed, 
                // but effectively:

                // Reset stack based on diff
                // This is complex to get perfect for random jumps.

                // Alternative: Simple Indentation implementation (Flat list with margins)
                // But valid HTML structure is better.

                // Re-eval: Just append to parent based on level diff.
                const depthDiff = currentLevel - level;
                for (let i = 0; i < depthDiff; i++) {
                    if (listStack.length > 1) listStack.pop();
                }
                listStack[listStack.length - 1].appendChild(listItem);
            } else {
                // Same level
                lastList.appendChild(listItem);
            }
            currentLevel = level;
        }
    });

    tocContainer.appendChild(tocList);

    // Intersection Observer for Active State
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = tocContainer.querySelector(`a[href="#${id}"]`);
            if (link) {
                if (entry.isIntersecting) {
                    // Deactivate all
                    tocContainer.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0
    });

    headers.forEach(header => observer.observe(header));

    // Smooth scroll
    tocContainer.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for sticky header
                    behavior: 'smooth'
                });
                // Manually set active
                tocContainer.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                e.target.classList.add('active');
            }
        }
    });
});
