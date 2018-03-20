/* 手机号码 */
export const phone = /^1[34578]\d{9}$/;

/* 身份证号码(15|18) */
export const isIDCard = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;