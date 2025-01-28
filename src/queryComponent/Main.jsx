
function Main() {
  return (
    <main>
        <h1>الإجازات المرضية</h1>
        <p>
            خدمة الاستعلام عن الإجازات المرضية تتيح لك الاستعلام عن حالة طلبك للإجازة ويمكنك طباعتها عن طريق تطبيق صحتي
        </p>
        <form className="form-query form">
            <input type="text" placeholder="رمز الخدمة" required />
            <input type="text" placeholder="رقم الهوية / الإقامة" required />
            <button type="submit" class="primary-btn">استعلام</button>
            <button type="button" class="secondary-btn">رجوع للاستعلامات</button>
        </form>
    </main>
  )
}

export default Main;