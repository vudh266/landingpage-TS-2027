"use strict";
document.addEventListener("DOMContentLoaded",()=>{
  // The static preview intentionally has no server-side form endpoint.
  // Never report a successful registration without an actual API response.
  document.querySelectorAll(".admission-form").forEach(form=>{
    form.addEventListener("submit",event=>{
      event.preventDefault();
      const status=form.querySelector(".form-alert");
      form.classList.add("was-validated");
      if(!form.checkValidity()){status.textContent="Vui lòng kiểm tra và điền đầy đủ các trường bắt buộc.";status.className="form-alert col-12 mb-0 text-danger";form.reportValidity();return;}
      status.textContent="Biểu mẫu hiện đang ở chế độ xem trước và chưa được kết nối hệ thống tiếp nhận đăng ký. Vui lòng liên hệ hotline (0258) 3727 147 để được tư vấn.";
      status.className="form-alert col-12 mb-0 text-primary";
    });
  });
  const lightboxElement=document.getElementById("lightbox");
  if(lightboxElement&&window.bootstrap){
    const lightbox=new bootstrap.Modal(lightboxElement);
    document.querySelectorAll("[data-lightbox]").forEach(link=>{
      link.addEventListener("click",event=>{
        event.preventDefault();
        const image=link.querySelector("img");
        document.getElementById("lightboxImage").src=link.getAttribute("href");
        document.getElementById("lightboxImage").alt=image?.alt||"Ảnh khuôn viên";
        document.getElementById("lightboxCaption").textContent=image?.alt||"";
        lightbox.show();
      });
    });
  }
  document.querySelectorAll("#navContent .nav-link").forEach(link=>{
    link.addEventListener("click",()=>{
      const toggle=document.querySelector(".navbar-toggler");
      const target=document.getElementById("navContent");
      if(target?.classList.contains("show")&&window.bootstrap)bootstrap.Collapse.getOrCreateInstance(target).hide();
    });
  });
});
