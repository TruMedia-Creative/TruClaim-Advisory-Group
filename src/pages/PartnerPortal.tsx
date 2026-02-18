import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, Users, Settings, LogOut, Download, Bell, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const PartnerPortal = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/partner-login');
  };

  const documents = [
    { name: 'Q4 2024 Network Report', date: '2024-12-15', type: 'Report' },
    { name: 'ISG Marketing Guidelines', date: '2024-11-01', type: 'Guidelines' },
    { name: 'Partner Benefits Summary', date: '2024-10-20', type: 'Summary' },
    { name: 'M-JAK Rate Updates', date: '2024-10-15', type: 'Rates' },
  ];

  const announcements = [
    { title: 'Annual Partner Meeting - March 2025', date: 'Jan 15, 2025', urgent: true },
    { title: 'New M-JAK Program Available', date: 'Jan 10, 2025', urgent: false },
    { title: 'Holiday Office Hours', date: 'Dec 20, 2024', urgent: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-royal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Partner Portal</h1>
              <p className="text-royal-200">Welcome to the ISG Partner Area</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Network Brokerages', value: '11' },
                { icon: FileText, label: 'Active Documents', value: '24' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <stat.icon className="text-gold-500 mb-2" size={24} />
                  <p className="text-2xl font-bold text-royal-800">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Documents Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-royal-800 mb-4 flex items-center gap-2">
                <FileText size={20} />
                Partner Documents
              </h2>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div>
                      <h3 className="font-medium text-gray-800">{doc.name}</h3>
                      <p className="text-sm text-gray-500">{doc.type} - {doc.date}</p>
                    </div>
                    <button className="flex items-center gap-1 text-royal-600 hover:text-royal-800 text-sm font-medium">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-royal-600 font-medium hover:underline text-sm">
                View All Documents →
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-royal-800 mb-4 flex items-center gap-2">
                <Settings size={20} />
                Quick Links
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'M-JAK Submissions', href: '/mjak' },
                  { label: 'Network Directory', href: '/brokerages' },
                  { label: 'Marketing Resources', href: '#' },
                  { label: 'Training Materials', href: '#' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-royal-50 transition flex items-center justify-between group"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-royal-800">
                      {link.label}
                    </span>
                    <span className="text-gray-400 group-hover:text-royal-600">→</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Announcements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-royal-800 mb-4 flex items-center gap-2">
                <Bell size={20} />
                Announcements
              </h2>
              <div className="space-y-4">
                {announcements.map((item) => (
                  <div key={item.title} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start gap-2">
                      {item.urgent && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                          Important
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium text-gray-800 mt-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-royal-800 rounded-xl shadow-md p-6 text-white"
            >
              <h2 className="text-lg font-bold mb-2">Need Help?</h2>
              <p className="text-royal-200 text-sm mb-4">
                Contact the ISG support team for partner-related inquiries.
              </p>
              <a
                href="tel:9052596397"
                className="flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium mb-3"
              >
                <Phone size={18} />
                905-259-6397
              </a>
              <a
                href="mailto:partners@insurancespecialtygroup.ca"
                className="inline-block bg-gold-500 text-royal-900 px-4 py-2 rounded-lg font-medium hover:bg-gold-400 transition"
              >
                Contact Support
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPortal;
