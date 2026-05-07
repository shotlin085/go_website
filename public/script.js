document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const openBtns = [document.getElementById('openModalBtn'), document.getElementById('demoBtn')];
    const closeBtn = document.getElementById('closeModalBtn');
    const subscribeForm = document.getElementById('subscribeForm');
    const successMessage = document.getElementById('successMessage');

    const openModal = () => {
        modalOverlay.classList.add('active');
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        // Reset form state after closing
        setTimeout(() => {
            subscribeForm.style.display = 'flex';
            successMessage.style.display = 'none';
            subscribeForm.reset();
        }, 300);
    };

    openBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle form submission
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate API call
        const btn = subscribeForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Processing...';
        btn.disabled = true;

        setTimeout(() => {
            subscribeForm.style.display = 'none';
            successMessage.style.display = 'block';
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });
});
