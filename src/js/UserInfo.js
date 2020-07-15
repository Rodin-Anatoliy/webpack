export class UserInfo {

	constructor(name, job, avatar, popup) {
		this.name = name;
		this.job = job;
		this.avatar = avatar;
		this.form = popup.popup.querySelector('.popup__form');
		popup.openButton.addEventListener('click', () => this.setUserInfo(this.form.elements));
	}

	setUserInfo({name, job}) {
		name.value = this.name.textContent;
		job.value = this.job.textContent ;
	}

	updateUserInfo({name, job, avatar}) {
		this.name.textContent = name;
		this.job.textContent = job;
		if (avatar) {
			this.avatar.style.backgroundImage = `url(${avatar})`;
		}
	}
}