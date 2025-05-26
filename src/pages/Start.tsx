
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Start = () => {
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
              شروع کنید
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              در چند دقیقه سیستم پیام‌رسانی خود را راه‌اندازی کنید و تجربه‌ای بی‌نظیر از ارتباط با مشتریان داشته باشید.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                پلان‌های ما
              </h3>
              <p className="text-xl text-gray-600">
                بهترین پلان را برای نیازهای خود انتخاب کنید
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <Card className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">پایه</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-gray-900">رایگان</span>
                    <span className="text-gray-600">/ماه</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>تا ۱۰۰ پیام در ماه</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>۵ پیام پیش‌فرض</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>پشتیبانی ایمیلی</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    شروع رایگان
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="relative hover:shadow-lg transition-shadow border-blue-500 border-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    محبوب‌ترین
                  </span>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">حرفه‌ای</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-gray-900">۴۹۹,۰۰۰</span>
                    <span className="text-gray-600"> تومان/ماه</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>تا ۵,۰۰۰ پیام در ماه</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>پیام‌های نامحدود پیش‌فرض</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>گزارش‌گیری پیشرفته</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>پشتیبانی ۲۴/۷</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">
                    انتخاب پلان حرفه‌ای
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">سازمانی</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-gray-900">سفارشی</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>پیام‌های نامحدود</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>قابلیت‌های سفارشی</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>مدیر اختصاصی</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span>یکپارچه‌سازی سفارشی</span>
                    </li>
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full mt-6" variant="outline">
                      تماس با فروش
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                مراحل شروع
              </h3>
              <p className="text-xl text-gray-600">
                در چند مرحله ساده، سیستم خود را راه‌اندازی کنید
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ۱
                </div>
                <h4 className="text-xl font-semibold mb-2">ثبت‌نام</h4>
                <p className="text-gray-600">
                  حساب کاربری خود را ایجاد کنید
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ۲
                </div>
                <h4 className="text-xl font-semibold mb-2">تنظیمات</h4>
                <p className="text-gray-600">
                  پیام‌های پیش‌فرض را تعریف کنید
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ۳
                </div>
                <h4 className="text-xl font-semibold mb-2">یکپارچه‌سازی</h4>
                <p className="text-gray-600">
                  سیستم را با ابزارهای خود متصل کنید
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ۴
                </div>
                <h4 className="text-xl font-semibold mb-2">شروع</h4>
                <p className="text-gray-600">
                  با مشتریان خود ارتباط برقرار کنید
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-bold text-white mb-4">
              آماده برای شروع هستید؟
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              همین حالا تجربه‌ای متفاوت از پیام‌رسانی را آغاز کنید
            </p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <Button size="lg" variant="secondary">
                شروع رایگان
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  سوال دارید؟
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Start;
