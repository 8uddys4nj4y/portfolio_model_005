
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 relative" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
            Communication <span className="text-neon-cyan">Portal</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Establish connection and initiate collaboration protocols
          </p>
          
          <div className="flex justify-center mt-4">
            <div 
              className="h-1 w-24 rounded-full" 
              style={{ 
                background: `linear-gradient(90deg, transparent, #FF5F1F, transparent)`,
                boxShadow: '0 0 10px #FF5F1F'
              }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="tech-panel p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <MessageSquare size={20} className="text-neon-cyan" />
              <span>Send Message</span>
            </h3>
            
            <form className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm">Identification</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-muted border border-neon-cyan/30 rounded p-2 pl-9 text-sm focus:border-neon-cyan focus:ring focus:ring-neon-cyan/20 transition-all"
                    placeholder="Enter your name"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-cyan/50">
                    <span className="text-xs console-text">&gt;</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm">Communication Channel</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-muted border border-neon-cyan/30 rounded p-2 pl-9 text-sm focus:border-neon-cyan focus:ring focus:ring-neon-cyan/20 transition-all"
                    placeholder="Enter your email"
                  />
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-cyan/50" />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm">Transmission Content</label>
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-muted border border-neon-cyan/30 rounded p-2 text-sm focus:border-neon-cyan focus:ring focus:ring-neon-cyan/20 transition-all"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="neon-border bg-muted px-6 py-2 rounded-md text-neon-cyan font-semibold transition-all duration-300 flex items-center gap-2 hover:bg-neon-cyan/10"
              >
                <Send size={16} />
                <span>Transmit Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info - Improved visibility */}
          <div className="flex flex-col gap-6">
            <div className="tech-panel p-6 h-1/2">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Mail size={20} className="text-neon-cyan" />
                <span>Contact Protocols</span>
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="p-4 border-2 border-neon-cyan/50 rounded bg-muted/80 hover:border-neon-cyan transition-colors duration-300 hover:bg-muted">
                  <p className="font-medium text-neon-cyan text-base">Email Transmission</p>
                  <p className="mt-1 console-text">contact@chronoforge.dev</p>
                </div>
                
                <div className="p-4 border-2 border-neon-cyan/50 rounded bg-muted/80 hover:border-neon-cyan transition-colors duration-300 hover:bg-muted">
                  <p className="font-medium text-neon-cyan text-base">Neural Interface ID</p>
                  <p className="mt-1 console-text">CHRONO-DEV-9X720</p>
                </div>
                
                <div className="p-4 border-2 border-neon-cyan/50 rounded bg-muted/80 hover:border-neon-cyan transition-colors duration-300 hover:bg-muted">
                  <p className="font-medium text-neon-cyan text-base">Operation Coordinates</p>
                  <p className="mt-1 console-text">Quantum Sector, Digital Nexus</p>
                </div>
              </div>
            </div>
            
            {/* Network Nodes with larger icons */}
            <div className="tech-panel p-6 h-1/2">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-neon-cyan">[</span>
                <span>Network Nodes</span>
                <span className="text-neon-cyan">]</span>
              </h3>
              
              <div className="flex justify-around">
                {[
                  { icon: Github, label: "Github", color: "#39FF14" },
                  { icon: Linkedin, label: "LinkedIn", color: "#00FFFF" },
                  { icon: Twitter, label: "Twitter", color: "#BF00FF" }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="flex flex-col items-center gap-3 neon-border p-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-muted/80"
                  >
                    <item.icon size={36} style={{ color: item.color }} className="animate-glow" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
