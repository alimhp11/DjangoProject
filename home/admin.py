from django.contrib import admin
from django.contrib.auth.models import User

from .models import *
admin.site.register(Category)
admin.site.register(New)
admin.site.register(Ad)
admin.site.register(Urgent)


admin.site.site_header = "پنل مدیریت سایت خبری"
admin.site.site_title = "مدیریت سایت"
admin.site.index_title = "خوش آمدی علی 😊"

class CustomAdminSite(admin.AdminSite):
    def each_context(self, request):
        context = super().each_context(request)
        context['css'] = 'css/admin_fa.css'
        return context

# فایل CSS رو به همه صفحات ادمین اضافه کن
admin.site.site_header = "پنل مدیریت سایت"
admin.site.index_title = "مدیریت اخبار روز"

