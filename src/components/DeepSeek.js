import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DeepSeekArticle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const containerStyle = {
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
    background: darkMode ? '#222' : 'white',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '12px',
    color: darkMode ? '#e0e0e0' : '#333',
    transition: 'all 0.3s ease-in-out',
  };

  const headingStyle = {
    color: darkMode ? '#f1c40f' : '#2c3e50',
    fontSize: '1.8rem',
    marginBottom: '10px',
  };

  const subHeadingStyle = {
    color: darkMode ? '#f1c40f' : '#2c3e50',
    fontSize: '1.4rem',
    marginTop: '20px',
  };

  const tocStyle = {
    background: darkMode ? '#333' : '#ecf0f1',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    transition: 'background 0.3s ease-in-out',
  };

  const tocLinkStyle = {
    display: 'block',
    textDecoration: 'none',
    color: darkMode ? '#f1c40f' : '#2c3e50',
    padding: '6px 0',
    transition: 'color 0.3s',
  };

  const toggleButtonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: darkMode ? '#f1c40f' : '#2c3e50',
    color: darkMode ? '#2c3e50' : 'white',
    border: 'none',
    padding: '12px 18px',
    cursor: 'pointer',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'background 0.3s ease-in-out',
  };

  const imageStyle = {
    maxWidth: '100%',
    borderRadius: '10px',
    margin: '20px 0',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div className="w-full min-h-screen" style={{ background: darkMode ? '#181818' : '#f4f4f4', transition: 'background 0.3s' }}>
      <motion.button 
        style={toggleButtonStyle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </motion.button>

      <motion.div 
        style={containerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 style={headingStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          DeepSeek R1: The AI Revolution
        </motion.h1>
        <p><i>Exploring the latest open-source AI reasoning model shaking up the industry.</i></p>

        <motion.img 
          src="https://miro.medium.com/v2/resize%3Afit%3A1024/1%2A_LAxJfIeP3xo3Se1bc0Z7Q.png"
          alt="AI Revolution Illustration"
          style={{ ...imageStyle, width: "300px", height: "300px" }} // Ensures full width
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />




        <div style={tocStyle}>
          <h3 style={subHeadingStyle}>Table of Contents</h3>
          <a href="#introduction" style={tocLinkStyle}>Introduction</a>
          <a href="#deepseek-v3-vs-r1" style={tocLinkStyle}>DeepSeek V3 vs. R1</a>
          <a href="#efficiency-tricks" style={tocLinkStyle}>Efficiency Tricks</a>
          <a href="#nvidia-advantage" style={tocLinkStyle}>NVIDIA's Advantage</a>
          <a href="#moe-architecture" style={tocLinkStyle}>Mixture of Experts</a>
          <a href="#reinforcement-learning" style={tocLinkStyle}>Reinforcement Learning</a>
          <a href="#why-the-hype" style={tocLinkStyle}>Why the Hype?</a>
          <a href="#conclusion" style={tocLinkStyle}>Conclusion</a>
        </div>

        <section id="introduction">
          <h2 style={subHeadingStyle}>Introduction</h2>
          <p>There's a new AI model that's disrupting the artificial intelligence landscape. Chinese AI company DeepSeek has sent shockwaves through the tech industry with its announcement of R1, an open-source reasoning model that represents a significant breakthrough in AI development. What makes R1 particularly remarkable is its claimed ability to match the performance of OpenAI's GPT-4o while operating at substantially lower computational and financial costs.</p>

          <p>The announcement's impact was seismic, triggering unprecedented market reactions that saw tech giant Nvidia's market capitalization plummet by nearly $600 billion in a single trading session. This dramatic response reflects both the potential disruption to existing AI business models and the broader implications for the future of AI development.</p>

          {/* <motion.img 
            src=""
            alt="Stock Market Impact" 
            style={{ ...imageStyle, width: "100%", height: "400px" }} 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          /> */}

          <p>For those deeply embedded in the AI research community, DeepSeek's breakthrough wasn't entirely unexpected. The company has been methodically building its foundation by openly publishing research papers and releasing its model weights for months. This approach mirrors the successful strategy employed by Meta's Llama model, which has become a cornerstone of open-source AI development.</p>
        </section>

        <section id="deepseek-v3-vs-r1">
          <h2 style={subHeadingStyle}>DeepSeek V3 vs. R1</h2>
          <p>To understand DeepSeek's breakthrough, it's crucial to distinguish between their two flagship models: DeepSeek V3 and DeepSeek R1. DeepSeek V3, released in December, represents a significant advancement in general-purpose AI models. As a foundation model, it demonstrates remarkable versatility across various tasks, achieving performance metrics that put it in direct competition with industry leaders like OpenAI's GPT-4-turbo, Anthropic's Claude 3.5 Sonnet, and Google's Gemini 1.5.</p>

          <motion.img 
            src="https://arxiv.org/html/2501.12948v1/x1.png"
            alt="AI Models Comparison" 
            style={imageStyle} 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <p>DeepSeek R1, unveiled in January, represents a specialized evolution of the V3 architecture. It's specifically engineered to excel at complex reasoning tasks—a frontier that has long challenged AI researchers. By implementing sophisticated algorithmic enhancements to V3's core architecture, DeepSeek created a model that can match or exceed the reasoning capabilities of OpenAI's GPT-4o and Google's Flash 2.0 on numerous complex benchmarks.</p>
        </section>

        <section id="efficiency-tricks">
          <h2 style={subHeadingStyle}>Efficiency Tricks</h2>
          <p>One of DeepSeek's most innovative efficiency improvements lies in their approach to numerical precision during model training. Traditional AI models typically use 16-bit or 32-bit floating-point formats for their calculations, which provide high numerical precision but consume substantial computational resources. DeepSeek took a bold step by training V3 natively in 8-bit floating-point format (FP8), effectively reducing the memory footprint of their calculations by 50-75% compared to conventional approaches.</p>

          <motion.img 
            src="https://arxiv.org/html/2501.12948v1/extracted/6147501/figures/plot_aime_with_maj.png"
            alt="Efficiency Innovations" 
            style={imageStyle} 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <p>The significance of these efficiency improvements extends far beyond mere technical optimization. In the context of current geopolitical tensions and U.S. export controls on advanced GPU sales to China, DeepSeek's innovations in efficiency represent a crucial adaptation to hardware constraints.</p>
        </section>

        <section id="nvidia-advantage">
          <h2 style={subHeadingStyle}>NVIDIA's Advantage</h2>
          <p>This is where NVIDIA's key advantage becomes apparent: it's not just about the GPUs themselves, but rather an integrated solution they've been building and refining for over a decade. This ecosystem includes their proprietary networking technology (InfiniBand), software development platform (CUDA), and comprehensive developer experience. The result is a deeply integrated system that allows AI researchers to program vast clusters of GPUs as if they were working with a single, massive computational unit.</p>
        </section>

        <section id="moe-architecture">
          <h2 style={subHeadingStyle}>Mixture of Experts Architecture</h2>
          <p>DeepSeek's implementation of the Mixture of Experts (MoE) architecture represents another breakthrough in efficiency. Their V3 model contains a massive 671 billion parameters, but intelligently activates only 37 billion for any given token prediction. This selective activation approach stands in stark contrast to traditional models like Llama 3, which must process all 405 billion parameters for each prediction.</p>

          <motion.img 
            src="https://arxiv.org/html/2412.19437v1/x2.png"
            alt="MoE Architecture" 
            style={imageStyle} 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <p>Additionally, V3 employs Multi-Head Latent Attention (MLA) to tackle key-value cache storage limitations. By compressing key and value matrices into latent representations, MLA achieved a 93.3% reduction in cache size while boosting generation throughput by 5.76 times.</p>
        </section>

        <section id="reinforcement-learning">
          <h2 style={subHeadingStyle}>Reinforcement Learning</h2>
          <p>Most LLMs can be improved by being prompted to "think step by step," but what sets reasoning models apart is that they are specifically trained to break down hard problems and think through them for paragraphs at a time. In September, OpenAI demonstrated this with GPT-4o, achieving state-of-the-art results across math, coding, and science benchmarks.</p>

          <motion.img 
            src="https://arxiv.org/html/2501.12948v1/extracted/6147501/figures/plot_length.png"
            alt="Reinforcement Learning" 
            style={imageStyle} 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <p>DeepSeek's approach to reinforcement learning represents a significant innovation. Rather than relying on complex AI feedback systems, they developed a straightforward rules-based evaluation process. Through their novel Group Relative Policy Optimization (GRPO) technique, the model learned to reason effectively over thousands of training steps.</p>
        </section>

        <section id="why-the-hype">
          <h2 style={subHeadingStyle}>Why the Hype?</h2>
          <p>The excitement around DeepSeek isn't just about its performance—it's about accessibility and democratization of AI technology. These models are freely available for use, fine-tuning, and local deployment, making advanced AI capabilities accessible to a broader range of developers and researchers.</p>

          {/* <motion.img 
            src="/api/placeholder/900/400"
            alt="Future of AI" 
            style={imageStyle} 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          /> */}

          <p>DeepSeek's success proves that innovation in AI remains open to new players, particularly those focused on optimizing GPU workloads and improving inference efficiency. This has significant implications for both consumer and enterprise applications, as it suggests the cost of deploying sophisticated AI solutions will continue to decrease.</p>
        </section>
      </motion.div>
    </div>
  );
};

export default DeepSeekArticle;