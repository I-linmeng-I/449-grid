let gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(gridItem => {
        gridItem.addEventListener('click', function() {
            this.style.backgroundColor = 'green';
        });
    });

