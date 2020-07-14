class PopupWithImage extends Popup {
	constructor(popup) {
		super(popup);
		this.popup.querySelector('.popup__close').addEventListener('click', () => super.close());
		document.body.addEventListener('keydown', (event) => {
			if (event.key === "Escape" && this.popup.classList.contains('popup_is-opened')) {
				super.close();
			} 
		});
	}

	openImage(link) {
		const zoomImage = this.popup.querySelector('.popup__image');
		zoomImage.setAttribute('src', link);
		super.open();
	}

	eventListener(event) {
		if (event.target === event.currentTarget) {
			const link = event.target.style.backgroundImage.slice(5).slice(0, -2);
			this.openImage(link);
		}
	}

}