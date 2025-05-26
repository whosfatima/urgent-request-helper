
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">سیستم پیام‌رسانی</h1>
            </div>
            <nav className="flex space-x-4 space-x-reverse">
              <Link to="/about">
                <Button variant="ghost">درباره ما</Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost">تماس</Button>
              </Link>
              <Link to="/start">
                <Button>شروع کنید</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content with top padding for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              تماس با ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ما همیشه آماده پاسخگویی به سوالات و ارائه راهنمایی به شما هستیم. از طریق روش‌های زیر می‌توانید با ما در ارتباط باشید.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">تماس تلفنی</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <div className="space-y-2">
                      <p className="font-semibold">۰۲۱-۱۲۳۴۵۶۷۸</p>
                      <p className="text-sm text-gray-500">شنبه تا پنج‌شنبه، ۹ تا ۱۸</p>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">ایمیل</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <div className="space-y-2">
                      <p className="font-semibold">info@messaging.ir</p>
                      <p className="text-sm text-gray-500">پاسخ در کمتر از ۲۴ ساعت</p>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">آدرس</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <div className="space-y-2">
                      <p className="font-semibold">تهران، خیابان ولیعصر</p>
                      <p className="text-sm text-gray-500">برج تجاری، طبقه ۱۰</p>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                پیام خود را ارسال کنید
              </h3>
              <p className="text-xl text-gray-600">
                فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="نام کامل خود را وارد کنید"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ایمیل
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="آدرس ایمیل خود را وارد کنید"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      موضوع
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="موضوع پیام خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      پیام
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="پیام خود را اینجا بنویسید..."
                    />
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      ارسال پیام
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
