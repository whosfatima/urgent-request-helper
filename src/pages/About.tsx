
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              درباره ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ما تیمی از متخصصان فناوری هستیم که با هدف ارائه بهترین راه‌حل‌های ارتباطی به کسب‌وکارها تلاش می‌کنیم.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">ماموریت ما</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    تسهیل ارتباطات کسب‌وکارها با مشتریان از طریق ارائه ابزارهای هوشمند و کارآمد پیام‌رسانی که باعث افزایش رضایت مشتریان و بهبود عملکرد کسب‌وکار می‌شود.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">چشم‌انداز ما</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    تبدیل شدن به پیشرو در ارائه راه‌حل‌های نوآورانه پیام‌رسانی در منطقه و کمک به کسب‌وکارها برای دستیابی به موفقیت بیشتر از طریق ارتباط مؤثر با مشتریان.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                ارزش‌های ما
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  🚀
                </div>
                <h4 className="text-xl font-semibold mb-2">نوآوری</h4>
                <p className="text-gray-600">
                  همیشه در جستجوی راه‌حل‌های نوآورانه و مدرن برای نیازهای مشتریان
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ⭐
                </div>
                <h4 className="text-xl font-semibold mb-2">کیفیت</h4>
                <p className="text-gray-600">
                  ارائه بالاترین کیفیت در محصولات و خدمات با دقت بر جزئیات
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  🤝
                </div>
                <h4 className="text-xl font-semibold mb-2">اعتماد</h4>
                <p className="text-gray-600">
                  ایجاد روابط بلندمدت مبتنی بر اعتماد و شفافیت با مشتریان
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-bold text-white mb-4">
              آماده همکاری با ما هستید؟
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              بیایید با هم آینده‌ای بهتر برای ارتباطات کسب‌وکار شما بسازیم
            </p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  تماس با ما
                </Button>
              </Link>
              <Link to="/start">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  شروع کنید
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
